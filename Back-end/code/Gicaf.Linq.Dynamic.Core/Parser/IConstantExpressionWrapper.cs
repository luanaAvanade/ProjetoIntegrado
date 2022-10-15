using System.Linq.Expressions;

namespace Gicaf.Linq.Dynamic.Core.Parser
{
    internal interface IConstantExpressionWrapper
    {
        void Wrap(ref Expression expression);
    }
}
