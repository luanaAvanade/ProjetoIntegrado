//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Gicaf.Domain.Resources {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Resource {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Resource() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Gicaf.Domain.Resources.Resource", typeof(Resource).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Descrição da Coleta.
        /// </summary>
        internal static string CL_Coleta_Descricao_D {
            get {
                return ResourceManager.GetString("CL_Coleta.Descricao_D", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Descrição.
        /// </summary>
        internal static string CL_Coleta_Descricao_N {
            get {
                return ResourceManager.GetString("CL_Coleta.Descricao_N", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Latitudeeeeee.
        /// </summary>
        internal static string CL_Coordenada_Latitude_N {
            get {
                return ResourceManager.GetString("CL_Coordenada.Latitude_N", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Longitudeeee.
        /// </summary>
        internal static string CL_Coordenada_Longitude_N {
            get {
                return ResourceManager.GetString("CL_Coordenada.Longitude_N", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to {PropertyName} deve estar entre {From} e {To}.
        /// </summary>
        internal static string MSG_Valicacao_Intervalo {
            get {
                return ResourceManager.GetString("MSG_Valicacao_Intervalo", resourceCulture);
            }
        }
    }
}
