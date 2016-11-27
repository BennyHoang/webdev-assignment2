using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml.Linq;
using WhatsUp.Models;

namespace WhatsUp.Controllers
{
    public class JournalistController : ApiController
    {
        public HttpResponseMessage UploadImage()
        {
            String fileName = null;
            if (System.Web.HttpContext.Current.Request.Files != null)
            {
                var file = System.Web.HttpContext.Current.Request.Files[0];
                fileName = file.FileName;
                file.SaveAs(GetImageFilePath(fileName));
            }
            return Request.CreateResponse(HttpStatusCode.OK, GetImageFilePath(fileName));
        }

        private String GetImageFilePath(String filename)
        {
            return System.Web.Hosting.HostingEnvironment.MapPath(@"~/Images/" + filename);
        }
        public HttpResponseMessage PostArticle(Article _article)
        {
            XElement articleXML = XElement.Load(GetDBFilePath());

            articleXML.Add(
                    new XElement("article",
                        new XElement("id", _article.Id),
                        new XElement("title", _article.Title),
                        new XElement("img", _article.Img )
                    )
                );
            articleXML.Save(GetDBFilePath());
            return Request.CreateResponse(HttpStatusCode.Created, _article);
        }
        public HttpResponseMessage DeleteArticle(int id)
        {
            XElement articleXML = XElement.Load(GetDBFilePath());
            var selectedArticle = (from article in articleXML.Descendants("article")
                                   where (int)article.Element("id") == id
                                   select article).SingleOrDefault();
            selectedArticle.Remove();
            articleXML.Save(GetDBFilePath());
            return Request.CreateResponse(HttpStatusCode.OK, selectedArticle);
        }
        public HttpResponseMessage PutArticle(Article _article)
        {
            XElement articleXML = XElement.Load(GetDBFilePath());

            var selectedArticle = (from article in articleXML.Descendants("article")
                                   where (int)article.Element("id") == _article.Id
                                   select article).SingleOrDefault();

            selectedArticle.SetElementValue("title", _article.Title);
            articleXML.Save(GetDBFilePath());

            return Request.CreateResponse(HttpStatusCode.OK, selectedArticle);
        }
        public HttpResponseMessage GetAllArticles()
        {
            XElement articlesXML = XElement.Load(GetDBFilePath());

            var articleList = from articles in articlesXML.Descendants("article")
                              select articles;
            return Request.CreateResponse(HttpStatusCode.OK, articleList);
        }
        public HttpResponseMessage GetArticleById(int? id)
        {
            XElement articlesXML = XElement.Load(GetDBFilePath());

            var selectedArticle = (from article in articlesXML.Descendants("article")
                                   where (int)article.Element("id") == id
                                   select article).SingleOrDefault();
            return Request.CreateResponse(HttpStatusCode.OK, selectedArticle);
        }

        private string GetDBFilePath()
        {
            return System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/articleDB.xml");
        }
    }
}
