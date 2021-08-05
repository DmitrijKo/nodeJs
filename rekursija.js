function faktorialas(sk) {
   if (typeof sk !== 'number') {
      throw new Error("Klaida: Tai ne skaicius!");
   }
   if (sk < 0) {
      throw new Error("Klaida: skaicius mazesnis uz 0");
   }
   if (sk === 0) {
      return 1;
   }
   return sk * faktorialas(sk - 1);
}
console.log(faktorialas("labas"));