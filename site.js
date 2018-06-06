/* Event fired on the drag target */
document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id)
  var previousArticle = event.path[1]
  previousArticle.setAttribute("is_selected_article",false);
  previousArticle.setAttribute("previously_selected",true);

  var previousClass = previousArticle.className
  var updatedClass = previousClass.replace("selected_article", " ");
  previousArticle.className = updatedClass

})

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault()
    
})

document.addEventListener("drop", function(event) {
    event.preventDefault()
    var data = event.dataTransfer.getData("Text")
    event.target.appendChild(document.getElementById(data))
    if(event.target.id==='targetNotFakeNews'){

        var popup = $('<div id="articlePrompt" class="row article_prompt">')

        popup.html(
            `
            <div class="col-md-12">
                <button onclick="$('#articlePrompt').remove()" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#  "class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        
            `
        )


        var selectedArticle = $('#' + event.target.id)
        
        selectedArticle.attr("previously_selected",false);
        selectedArticle.attr("is_selected_article",true);
        selectedArticle.append(popup)

        var previousClass = selectedArticle.attr('class')
        var updatedClass = previousClass += " selected_article"
        
        selectedArticle.attr("class", updatedClass)

        var draghome = $('#draghome')

        var dragtarget = $('#dragtarget')

        draghome.append(dragtarget)


  }
  else {
    alert("Wrong Try Again!")
    var draghome = $('#draghome')

    var dragtarget = $('#dragtarget')

    draghome.append(dragtarget)

}

})
  
var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}