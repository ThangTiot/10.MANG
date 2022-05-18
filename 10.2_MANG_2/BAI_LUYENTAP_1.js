let arr = []

function common() {
    let n = +prompt("Nhap vao so phan tu cua mang: ")
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Nhap vao gia tri thu: " + (i + 1))
    }
}

/// BAI 1
function bai1() {
    common()
    let count = 0
    let list = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            count += 1
            list += "Phan tu thu " + i + " co gia tri la: " + arr[i] + "<br>"
        }
    }
    document.getElementById("result").innerHTML = "Co tat ca " + count + " phan tu lon hon or bang 10 la: "
    document.getElementById("list").innerHTML = list
}

/// BAI 2+3
function bai23() {
    common()
    let max = arr[0]
    let index, sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] > max) {
            max = arr[i]
            index = i
        }
    }
    document.getElementById("result").innerHTML = "Gia tri lon nhat la: " + max + "<br> O vi tri thu: " + index
        + "<br> Gia tri trung binh cua mang la: " + sum / arr.length
}


/// BAI 4
function bai4() {
    common()
    document.getElementById("result").innerHTML = "Chuoi ban dau la: " + arr
    let tem
    let j=1
    for (let i = 0; i < j; i++) {
        j = arr.length - (i + 1)
        tem = arr[i]
        arr[i] = arr[j]
        arr[j] = tem
    }
    document.getElementById("list").innerHTML = "Chuoi sau khi dao nguoc la: " + arr
}

/// BAI 5
function bai5() {
    common()
    let count = 0
    let list = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count += 1
            list += "Phan tu thu " + i + " co gia tri la: " + arr[i] + "<br>"
        }
    }
    document.getElementById("result").innerHTML = "Co tat ca " + count + " phan tu am: "
    document.getElementById("list").innerHTML = list
}

/// BAI 7
function bai7() {
    common()
    let num = +prompt("Nhap vao gia tri V: ")
    for (let i=0;i<arr.length;i++) {
        if (arr[i] === num) {
            arr.splice(i,1)
        }
    }
    document.getElementById("result").innerHTML = "Chuoi moi la: " + arr
}

/// BAI 8
function bai8() {
    common()
    arr.sort(function (a,b) {
        return b - a
    })
    document.getElementById("result").innerHTML = "Chuoi sau khi sap xep la : " + arr
}

/// BAI 9
let arr1 = []
function common1() {
    let n = +prompt("Nhap vao so phan tu cua mang: ")
    for (let i = 0; i < n; i++) {
        arr1[i] = +prompt("Nhap vao gia tri thu: " + (i + 1))
    }
}

function bai9() {
    common()
    common1()
    let arrC = arr.concat(arr1).join(" ")
    document.getElementById("result").innerHTML = "Mang sau khi ket hop 2 mang la : " + arrC
}

