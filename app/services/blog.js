
const blogData = require('../data/blog.json')


module.exports = {





    async find() {

        //fetch Data from database

        const blogs =blogData
        return blogs


    
    },



    async findOne(blogId) {

        const blog =blogData.find((singleBlog) =>{
            if(singleBlog.id == blogId){
                return singleBlog
            }
        })
        return blog
    },


    async update(blogId,data) {

        let updateBlog ={}

        blogData.forEach((singleBlog)=>{
            if(singleBlog.id == blogId){
                singleBlog.body =data.body
                singleBlog.title =data.title
                updateBlog =singleBlog
            }

        })

    return updateBlog


    },



    async create(data) {

        
        let blogId =blogData[blogData.length -1].id +1
        const mblogData ={
            id : blogId,
            title:data.title,
            body:data.body
        }
        blogData.push(mblogData)
        return mblogData
    },




    async delete(blogId) {

        const blogIndex = blogData.findIndex((singleBlog)=>{
            if (singleBlog.id == blogId){
                return singleBlog
            }

        })


       blogData.splice(blogIndex, 1)
        return "ok"


    },





}
