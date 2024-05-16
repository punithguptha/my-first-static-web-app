var welcomeTextDict = {
    "en": "Reference Products Documentation"
}

function setWelcomeText() {
    for (var key in welcomeTextDict) {
        var element = $("header.portal-header[data-portal-language=" + key + "] h1");
        element.text(welcomeTextDict[key]);
    }
}

$(document).bind('ready ajaxComplete',function () {
    var targetLink = $('a:contains("Home")');
    targetLink.attr('target', '_self');
    var icon1 = "https://documents.o9solutions.com/homeicons/referenceproducts.png";
    var icon2 = "https://documents.o9solutions.com/homeicons/uinavigation.png";
    var icon3 = "https://documents.o9solutions.com/homeicons/oio.png";
    var icon4 = "https://documents.o9solutions.com/homeicons/EKGconfigurator.png";
    var icon5= "https://documents.o9solutions.com/homeicons/supplyplanning.png";
    var icon6 = "https://documents.o9solutions.com/homeicons/demandplanning.png";
    var icon7 = "https://documents.o9solutions.com/homeicons/knowledgehub.png";
    var icon8 = "https://documents.o9solutions.com/homeicons/sustainability.png";
    var icon9 = "https://documents.o9solutions.com/homeicons/productionscheduling.png";
    var icon10 = "https://documents.o9solutions.com/homeicons/nextgenprocurement.png";
    var icon11 = "https://documents.o9solutions.com/homeicons/retail.png";
    var icon12 = "https://documents.o9solutions.com/homeicons/meio.png";
    var icon13 = "https://documents.o9solutions.com/homeicons/oio.png";
    var icon14 = "https://documents.o9solutions.com/homeicons/aisegmentation.png";
    var icon15 = "https://documents.o9solutions.com/homeicons/segmentationfoundation.png";
    var icon16 = "https://documents.o9solutions.com/homeicons/rgm.png";
    $(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
    $(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
    $(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");
    $(".cat-panel-4").closest("a").prepend("<img src='" + icon4 + "'></img>");
    $(".cat-panel-5").closest("a").prepend("<img src='" + icon5 + "'></img>");
    $(".cat-panel-6").closest("a").prepend("<img src='" + icon6 + "'></img>");
    $(".cat-panel-7").closest("a").prepend("<img src='" + icon7 + "'></img>");
    $(".cat-panel-8").closest("a").prepend("<img src='" + icon8 + "'></img>");
    $(".cat-panel-9").closest("a").prepend("<img src='" + icon9 + "'></img>");
    $(".cat-panel-10").closest("a").prepend("<img src='" + icon10 + "'></img>");
    $(".cat-panel-11").closest("a").prepend("<img src='" + icon11 + "'></img>");
    $(".cat-panel-12").closest("a").prepend("<img src='" + icon12 + "'></img>");
    $(".cat-panel-13").closest("a").prepend("<img src='" + icon13 + "'></img>");
    $(".cat-panel-14").closest("a").prepend("<img src='" + icon14 + "'></img>");
    $(".cat-panel-15").closest("a").prepend("<img src='" + icon15 + "'></img>");
    $(".cat-panel-16").closest("a").prepend("<img src='" + icon16 + "'></img>");
    $(".publication-icon").remove();

    setWelcomeText();

// Assuming the content is similar to the provided script snippet
// Select the version menu element
var versionMenu = document.querySelector('.version-menu');
// Select the h1 element, which is preceding the location where we want to insert the versionMenu
var h1Element = document.querySelector('.inner h1');
// Check if both the version menu and h1 element exist
if (versionMenu && h1Element) {
    // Insert the version menu right after the h1 element
    h1Element.parentNode.insertBefore(versionMenu, h1Element.nextSibling);
}

// Select the version dropdown link
var versionDropdownLink = document.querySelector('.version-dropdown a');
// Check if the version dropdown link exists
if (versionDropdownLink) {
    // Update the inner HTML of the version dropdown link to include a dropdown icon
    versionDropdownLink.innerHTML = "Version \u25BC"; // Corrected for direct Unicode insertion
}

// Change the color of the dropdown menu and its text to black
// First, change the background color of the dropdown menu
versionMenu.style.backgroundColor = 'transparent';
versionMenu.style.display = "block";
versionMenu.style.marginLeft = "75%";
versionMenu.style.marginTop = "-65px";
versionMenu.style.marginBottom = "10px";
versionMenu.style.textAlign = "center";
versionMenu.style.width = "120px";
versionMenu.style.cursor= "pointer";
// Then, change the color of all links within the dropdown to black
var links = versionMenu.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
    links[i].style.setProperty('color', 'black', 'important'); // Force text color to black
    links[i].style.setProperty('font-size', '16px', 'important'); // Force text size to 16px
}

var caretElement = document.querySelector('.caret');
  if (caretElement) {
    var parentElement = caretElement.closest('a');
    if (parentElement) {
      parentElement.innerHTML = parentElement.innerHTML.replace('Select version', 'Version');
    }
  }

var featuredcontentlabelElement = document.querySelector('.featured-content-label');
  if (featuredcontentlabelElement) {
    featuredcontentlabelElement.style.display = "none";
  }

    var modal = document.createElement("div");
    modal.setAttribute("id", "feedbackModal");
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    var modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "15% auto";
    modalContent.style.padding = "50px";
    modalContent.style.border = "1px solid #888";
    modalContent.style.width = "50%";
    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.color = "#aaa";
    closeButton.style.float = "right";
    closeButton.style.fontSize = "28px";
    closeButton.style.fontWeight = "bold";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function () {
        modal.style.display = "none";
    }

    var instructions = document.createElement("div");
    instructions.innerHTML = "<h3>Create a New Work Item in RefDev workspace</h3><br>" + "1. Navigate to Work Items:<br>" + "   Go to Ref Dev, then select <span style=\"font-weight: bold !important;\">Boards &gt; Work Items.</span><br><br>" + "2. Add a New Work Item:<br>" + "   Click on (+) icon to add <span style=\"font-weight: bold !important;\">New Work Item.</span><br>" + "   Choose bug to add errors.<br>" + "   Choose requirement to add extra content.<br><br>" + "3. Filling in the Details:<br>" + "   Title: Enter a title that clearly summarizes the feedback or issue.<br>" + "   Area Selection: Choose <span style=\"font-weight: bold !important;\">RefDev\\Documentation</span> as the area.<br>" + "   Iteration Path: Select <span style=\"font-weight: bold !important;\">RefDev</span> for the iteration.<br>" + "   Feedback: Provide detailed feedback.<br>" + "   Mention the link/URL of the page that you are reporting along with the screenshot of the page.<br><br>" + "Remember, your detailed feedback helps us improve continuously.";
    var feedbackLink = document.createElement("a");
    feedbackLink.href = "#";
    feedbackLink.textContent = "Proceed to file a bug using ADO";
    feedbackLink.onclick = function (event) {
        event.preventDefault();
        var currentPageUrl = window.location.href;
        window.open("https://o9git.visualstudio.com/RefDev/Documentation?currentPageUrl=" + encodeURIComponent(currentPageUrl), "_blank");
    }

    modalContent.appendChild(closeButton);
    modalContent.appendChild(instructions);
    modalContent.appendChild(feedbackLink);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    var footer = document.querySelector(".site-footer");
    var feedbackContainer = document.createElement("div");
    feedbackContainer.classList.add("feedback-container");
    var feedbackIcon = document.createElement("i");
    feedbackIcon.className = "fa fa-pencil-square-o feedbackicon";
    feedbackContainer.appendChild(feedbackIcon);
    var feedbackText = document.createTextNode(" Feedback");
    feedbackContainer.appendChild(feedbackText);
    feedbackContainer.style.setProperty("color", "#0037ff", "important");
    feedbackContainer.onclick = function () {
        modal.style.display = "block";
    }

    var footer = document.querySelector(".site-footer");
    footer.style.display = "flex";
    footer.style.alignItems = "center";
    feedbackContainer.style.marginLeft = "10px";
    feedbackContainer.style.cursor = "pointer";
    footer.appendChild(feedbackContainer);
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

