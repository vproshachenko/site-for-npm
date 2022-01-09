async function getResponce(){
    let responce =  await fetch('https://ec2-18-184-156-205.eu-central-1.compute.amazonaws.com/')
    let content = await responce.json()
    console.log(content)

    let pack = document.querySelector('.pack');
        if(content.result == null){
            pack.innerHTML += `
            <div class="title">
                <h2 class="name">An error has occurred</h2>
                <p class="desc">Sorry, the package has not been uploaded</p>
            </div>
             `
        } else{
        pack.innerHTML +=`
        <div class="title">
            <h2 class="name">${content.result.name}</h2>
            <p class="desc">${content.result.descr}</p>
            <p class="category"> Category: ${content.result.category}</p>
            
            </div>
            <div class="info">
                <div class="basic_info">
                    <div class="installing">
                    <img  class="icon" src="images/icons/icon-installing.png" alt="icon">
                    <p class=" parag install">${content.result.downloads}</p>
                    </div>
                    <div class="data-time">
                    <img class="icon" src="images/icons/icon-clock.png" alt="icon">
                    <p class=" parag data">${content.result.date} </p>
                    </div>
                </div>
                <div class="btn_pack">
                    <a href="${content.result.link}" class="btn" target="_blank">Go to package</a>
                </div>
            </div>
        `
        }
    }

getResponce()




           
