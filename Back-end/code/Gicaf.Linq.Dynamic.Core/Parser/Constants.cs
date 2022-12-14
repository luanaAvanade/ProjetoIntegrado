using System.Linq.Expressions;

namespace Gicaf.Linq.Dynamic.Core.Parser
{
    internal static class Constants
    {
        public static bool IsNull(Expression exp)
        {
            return exp is ConstantExpression cExp && cExp.Value == null;
        }
    }
}
