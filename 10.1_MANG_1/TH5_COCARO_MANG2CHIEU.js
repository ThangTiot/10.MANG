let arr = []
let data = ""
let n=+prompt("Nhap n")
for (let i=0;i<n;i++) {
    arr[i] = []
}
for (let i=0;i<n;i++) {
    for (let j=0;j<n;j++) {
        arr[i][j] = 0
        data += arr[i][j] + "&nbsp;&nbsp;"
    }
    data += "<br>"
}
function changeValue() {
    data = ""
    let x= +prompt("Nhap gia tri X: ")
    let y= +prompt("Nhap gia tri Y: ")
    arr[x][y] = "x"
    for (let i=0;i<n;i++) {
        for (let j = 0; j < n; j++) {
            data += arr[i][j] + "&nbsp;&nbsp;"
        }
        data += "<br>"
    }
    document.getElementById("caro").innerHTML = data
}
document.getElementById("caro").innerHTML = data
