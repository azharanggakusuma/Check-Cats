function checkCats(tutiCats, niningCats) {
  const tutiCatsCopy = [...tutiCats];
  tutiCatsCopy.splice(0, 1);
  tutiCatsCopy.splice(-2);

  const combinedCats = tutiCatsCopy.concat(niningCats);

  for (let i = 0; i < combinedCats.length; i++) {
    const catAge = combinedCats[i];
    if (catAge >= 3) {
      console.log(
        `Kucing Nomor ${i + 1} adalah Kucing Dewasa dan berusia ${catAge} tahun`
      );
    } else {
      console.log(`Kucing Nomor ${i + 1} masih anak-anak.`);
    }
  }
}

// Data uji 1
const tutiCats1 = [3, 5, 2, 12, 7];
const niningCats1 = [4, 1, 15, 8, 3];
checkCats(tutiCats1, niningCats1);

// Data uji 2
const tutiCats2 = [9, 16, 6, 8, 3];
const niningCats2 = [10, 5, 6, 1, 4];
checkCats(tutiCats2, niningCats2);
