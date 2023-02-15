//export default
let countBMI = (berat,tinggi) =>{
    let resultBMI = berat / (tinggi * tinggi);
    let kategori;
    if(resultBMI >= 30){
        ketegori = "Obesitas (sama dengan atau di atas 30)"
    }
    else if(resultBMI >= 25 && resultBMI < 30){
        kategori = "Berat badan berlebih (di antara 25 - 29,9)"
    }
    else if(resultBMI >= 18.5 && resultBMI < 25){
        kategori = "Berat badan normal (di antara 18,5 - 24,9)"
    }
    else if(resultBMI < 18.5){
        kategori = "Berat badan di bawah normal (di bawah 18,5)"
    }
    console.log(`Berat saya ${berat} kg, dan tinggi saya ${tinggi} m.`);
    console.log(`Jadi Body Mass Index Kamu adalah : ${resultBMI}. Kamu termasuk dalam ${kategori}.`)
};

export default countBMI;