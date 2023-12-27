//display  modal on click
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
        
        //close modal
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


function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
      () => {
        // Clipboard successfully set, no need for any additional action
      },
    );
  }

//Display the actions of the password card for mobile devices
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
