using System;
using System.Collections.Generic;
using System.Globalization;
using System.Resources;
using System.Text;

namespace Gicaf.Domain.Resources
{
    public abstract class BaseDescriptor
    {
        public string Name { get; set; }
        public string Display { get; set; }
        public string Description { get; set; }

        protected BaseDescriptor(string name, string display, string description)
        {
            Name = name;
            Display = display;
            Description = description;
        }
    }

    public class FieldDecriptor : BaseDescriptor
    {
        public FieldDecriptor(string name, string display, string description) : base(name, display, description)
        {
        }
    }

    public class ClassDescriptor : BaseDescriptor
    {
        public ClassDescriptor(string name, string display, string description) : base(name, display, description)
        {
            Fields = new List<FieldDecriptor>();
        }

        public List<FieldDecriptor> Fields { get; set; }
    }

    public static class ResourceManagerExtensions
    {
        const string CLASS_NAME_PATTERN = "CL_{0}_N";
        const string CLASS_DESC_PATTERN = "CL_{0}_D";
        static public ClassDescriptor GetDescriptor<T>(this ResourceManager resource)
        {
            return GetDescriptor(resource, typeof(T));
        }

        static private string Get(this ResourceManager resource, string name, bool throwException, CultureInfo cultureInfo)
        {
            try
            {
                return resource.GetString(string.Format(name), cultureInfo);
            }
            catch (Exception e)
            {
                if (throwException)
                {
                    throw e;
                }
                return name;
            }
        }

        static public ClassDescriptor GetDescriptor(this ResourceManager resource, Type type, CultureInfo cultureInfo = null)
        {
            cultureInfo = cultureInfo ?? CultureInfo.CurrentCulture;
            var className = resource.GetName(type.Name, false, cultureInfo);
            var classDesc = resource.GetDescription(type.Name, false, cultureInfo);
            var classDescriptor = new ClassDescriptor(type.Name, className, classDesc);

            foreach (var prop in type.GetProperties())
            {
                var propName = resource.GetName($"{type.Name}.{prop.Name}", false, cultureInfo);
                var propDesc = resource.GetDescription($"{type.Name}.{prop.Name}", false, cultureInfo);
                classDescriptor.Fields.Add(new FieldDecriptor(prop.Name, propName, propDesc));
            }

            return classDescriptor;
        }

        static public string GetName(this ResourceManager resource, string name, bool throwException = false, CultureInfo cultureInfo = null)
        {
            cultureInfo = cultureInfo ?? CultureInfo.CurrentCulture;
            return resource.Get(string.Format(CLASS_NAME_PATTERN, name), throwException, cultureInfo);
        }

        static public string GetDescription(this ResourceManager resource, string name, bool throwException = false, CultureInfo cultureInfo = null)
        {
            cultureInfo = cultureInfo ?? CultureInfo.CurrentCulture;
            return resource.Get(string.Format(CLASS_DESC_PATTERN, name), throwException, cultureInfo);
        }
    }
}
