// For modals
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
        
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () =>{
            modalWrapper.style.display = "none";
            modal.style.display = "none";

        var homePageUrl = ""; 

        // Redirect to the home page
        window.location.href = homePageUrl;
        })
        document.querySelector("header").style.display = "none";
        document.querySelector("footer").style.display = "none";
    }
}

// For copying text
function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
      () => {
      },
    );
  }
// For actions
const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{ 
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 2000)
        }
    })
}
