const but = document.getElementById("clickme")
but.addEventListener("click", function () {
    promiseAPI1().then((res) => {

        console.log(res)

        if (res) {
            document.getElementById("table1").style.display = "block"
            document.getElementById("hello1").innerHTML = res?.posts.map((item) => {
                return `<tr>
                    <td>${item?.id}</td>
                    <td>${item?.title}</td>
                    <td>${item?.body}</td>
                    <td>
                     <ul>
                     ${item.tags.map((item) => {
                    return `<li>${item}</li>`
                })}
                     </ul >
                    </td >
                    <td >${item?.reactions}</td>
                        <td >${item?.userId}</td>
                </tr > `
            }).join("")
        }



        return res;
    }).then((res) => {
        promiseAPI2().then((res) => {
            console.log(res)
            if (res) {
                document.getElementById("table2").style.display = "block"
                document.getElementById("hello2").innerHTML = res?.products.map((item) => {
                    return `<tr>
                        <td>${item?.id}</td>
                        <td>${item?.title}</td>
                        <td>${item?.brand}</td>
                        <td>${item?.category}</td>
                        <td>${item?.description}</td>
                       
                        <td >${item?.discountPercentage}%</td>
                            <td >${item?.price}</td>
                            <td >${item?.rating}</td>
                            <td >${item?.stock}</td>
                            <td>
                              <ul>
                                ${item.images.map((item) => {
                        return `<li><img src=${item}></li>`
                    }).join("")}
                               </ul >
                            </td >
                    </tr > `
                }).join("")
            }
            return res
        })
    }).then((res) => {
        promiseAPI3().then((res) => {

            if (res) {
                document.getElementById("table3").style.display = "block"
                document.getElementById("hello3").innerHTML = res?.todos.map((item) => {
                    return `<tr>
                    <td>${item?.id}</td>
                    <td>${item?.todo}</td>
                    <td>${item?.completed}</td>
                    <td >${item?.userId}</td>
                </tr > `
                }).join("")
            }

            console.log(res)
        })
    }).catch((err) => {
        console.log(err);
    })
})


function promiseAPI1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            fetch("https://dummyjson.com/posts").then((response) => {
                return response.json()
            }).then((response) => {

                resolve(response)
            })
        }, 1000)
    })
}

function promiseAPI2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            fetch("https://dummyjson.com/products").then((response) => {
                return response.json()
            }).then((response) => {

                resolve(response)
            })
        }, 2000)
    })
}

function promiseAPI3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            fetch("https://dummyjson.com/todos").then((response) => {
                return response.json()
            }).then((response) => {

                resolve(response)
            })
        }, 3000)
    })
}