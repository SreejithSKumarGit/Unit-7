const Category=require("../Database/Category");

async function fetchAllCategory(req,res,next)
{
    const data=Category.find();

    resizeBy.send(data);
}
async function createCategory(req,res,next)
{
    const body=req.body;

    await Category.create(body);

    res.send("Category has been created successfully");

}
async function updateCategory(req,res,next)
{
    const {id}=req.params;
    const body=req.body;

    const data=await Category.findOneAndUpdate({_id:id},body);
    res.send("Category has been successfully updated");
}
async function deleteCategory(req,res,next)
{
    const {id}=req.params;
    await Category.findOneAndDelete({_id:id});
    res.send("Category has been deleted ");
}

module.exports={
    fetchAllCategory,
    createCategory,
    updateCategory,
    deleteCategory
}