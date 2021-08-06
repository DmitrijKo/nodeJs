async function asinchronine2() {
   return 2;
}
async function asinchronine3() {

   if (Math.random() < 0.5) {
      return 3;
   } else {
      return new Error("Klaida");
   }
}

async function main() {
   console.log("pradzia");
   try {
      let sk = await asinchronine2() + await asinchronine3();
      console.log(sk);
      console.log("pabaiga");
   } catch (err) {
      console.log("Klaida", err);
   } finally {
      console.log("visada");
   }
}
main();