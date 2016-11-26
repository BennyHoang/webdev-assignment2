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

        public HttpResponseMessage GetArticleById(int? id)
        {
            XElement articlesXML = XElement.Load(GetFilePath());

            var selectedArticle = (from article in articlesXML.Descendants("article")
                                   where (int)article.Element("id") == id
                                   select article).SingleOrDefault();
            return Request.CreateResponse(HttpStatusCode.OK, selectedArticle);
        }

        private string GetFilePath()
        {
            return System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/articleDB.xml");
        }
    }
}
