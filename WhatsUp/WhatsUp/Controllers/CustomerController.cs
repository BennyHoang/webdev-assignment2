using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml.Linq;

namespace WhatsUp.Controllers
{
    public class CustomerController : ApiController
    {
        public HttpResponseMessage GetAllArticles()
        {
            XElement articlesXML = XElement.Load(GetFilePath());

            var articleList = from articles in articlesXML.Descendants("article")
                           select articles;
            return Request.CreateResponse(HttpStatusCode.OK, articleList);
        }

        private string GetFilePath()
        {
            return System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/articleDB.xml");
        }
    }
}
