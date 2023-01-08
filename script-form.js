

const getE = (id) => {
    return document.getElementById(id).value;
};

// const setE = (id, val) => {
//     document.getElementById(id).value = val;
//     document.getElementById(id).innerHTML = val;
//     return;
// }

// try {
//     document.getElementById("form-sub").addEventListener("submit", makePDFpreview)
//     console.log("added")
//     document.getElementById("recipe-name").addEventListener("keypress", makePDFpreview)
// } catch {
//     console.log("did not added")
// }


var author
var recipe

function makePDFpreview(e) {
    // console.log("hey here")
    // e.preventDefault();
    author = getE("author-name");
    recipe = getE("recipe-name");
    about = getE("recipe-about");
    numServe = getE("serve");
    hrSpend = getE("time-spend");


    // location.replace("preview.html")
    // setE("", author)


    // setE("", )

}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
        console.log(key, ": ", value)
    });
    return vars;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }


function escapeRegExp(string) {
return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function loadPagePreview() {
    var val = getUrlVars()
    var following = true
    var ing_amount = ""
    var ste_amount = ""
    for (const [key, vals] of Object.entries(val)) {

        
        console.log("CURRENT: ", key, vals)

        if (key.includes("ingredient-amount")) {
            console.log("Yes it does")
            ing_amount = replaceAll(decodeURIComponent(vals), escapeRegExp("+"), " ");


        }
        else if (key.includes("ingredient-name")) {
            parent = document.getElementById("r-incredients")

            var wrapper = document.createElement('div');
            wrapper.innerHTML = `<p><span class="i-amount">` + ing_amount + ` </span><span class="i-name">` + vals + `</span></p>`;
            parent.appendChild(wrapper.firstChild);
            ing_amount = ""

        }


        else if (key.includes("step-amount")) {
            
            ste_amount = replaceAll(decodeURIComponent(vals), escapeRegExp("+"), " ");


        }
        else if (key.includes("step-name")) {
            parent = document.getElementById("r-steps")

            var wrapper = document.createElement('div');
            wrapper.innerHTML = `<p><span class="s-info">`+ ste_amount + `</span><span class="s-time">`+ vals + `</span></p>`;
            console.log(parent)
            parent.appendChild(wrapper.firstChild);
            ste_amount = ""

        }


        else {
            // if(document.getElementById(key).innerHTML!== null){
            document.getElementById(key).innerHTML = replaceAll(decodeURIComponent(vals), escapeRegExp("+"), " ");
            document.getElementById(key).value = replaceAll(decodeURIComponent(vals), escapeRegExp("+"), " ");
            // }
        }


    }
    // setE("r-title", recipe)
}

