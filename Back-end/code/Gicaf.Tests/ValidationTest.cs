using Gicaf.Tests.Attributes;
using Gicaf.Domain.Entities;
using Gicaf.Infra.Data.Context;
using Microsoft.VisualStudio.TestPlatform.CommunicationUtilities.Resources;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Xunit;
using System.Linq.Dynamic.Core;
using Gicaf.Infra.CrossCutting.IoC;
using Microsoft.Extensions.DependencyInjection;
using Gicaf.Domain.Interfaces.Repository;
using Gicaf.Domain.Services;
using Gicaf.Domain.Interfaces.Services;

namespace Gicaf.Tests
{
    public class ValidationTest
    {
        public static IEnumerable<object[]> MyProperty { get; set; }
        IServiceProvider _serviceProvider;
        CultureInfo culturePT = CultureInfo.GetCultureInfo("pt");
        CultureInfo cultureEN = CultureInfo.GetCultureInfo("en");
        CultureInfo cultureES = CultureInfo.GetCultureInfo("es");
        CultureInfo[] cultures; 

        public ValidationTest()
        {
            var services = new Microsoft.Extensions.DependencyInjection.ServiceCollection();
            InjectorBootStrapper.RegisterServices(services, null);
            _serviceProvider = services.BuildServiceProvider();

            cultures = new CultureInfo[] { culturePT, cultureEN, cultureES };
        }
        
    }
}
