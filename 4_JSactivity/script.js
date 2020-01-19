function add()  {
    document.getElementById("add");
    var node = document.createElement("Li");
    var text = document.getElementById("text_area").value; 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    document.getElementById("text_area").value = '';
}