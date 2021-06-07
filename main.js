var images=[
    "family.jpg","father.jpg","moher.jpg","uncle.jpg","aunt.png"
];
var names=[
    "Family Book","Praveen Bhaskaran","Sasimaladevi","Karthik Kumar","Shruti"];
var i=0;
function update(){
    i++;
    var number_of_family_membes_in_array = 5
    if(i>number_of_family_membes_in_array)
{
i = 0;
}
var updatedImage=images[i];
var updatedName=names[i];
document.getElementById("familymi").src=updatedImage;
document.getElementById("familymn").src=updatedName;
}