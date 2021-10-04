var person = {
    ten: "Kien",
    tuoi: "24",
    donvi: "BTL86"
}

//Su dung rat nhieu dau cong
console.log("Toi la " + person.ten + " va toi " + person.tuoi + " tuoi, hien dang cong tac tai " + person.donvi);

//Khong can su dung dau cong, co the tuy chinh de dang
console.log(`Toi la ${person.ten}
Toi ${person.tuoi}
Hien dang cong tac tai ${person.donvi}`);