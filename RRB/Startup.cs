using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RRB.Startup))]
namespace RRB
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
