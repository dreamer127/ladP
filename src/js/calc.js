// 'use strict';

// (function (global) {
//   const calcRoom = document.querySelector(".calc__room");
//   const calcRestroom = document.querySelector(".calc__restroom");
//   const result = document.querySelector(".result");

//   class Calc {
//     constructor(room, restroom, result) {
//       this.room = room;
//       this.restroom = restroom;
//       this.result = result;

//       this.countRoom = +room.dataset.defaultValue;
//       this.countRestroom = +restroom.dataset.defaultValue;

//       this.roomPrices = room.dataset.prices.split(',');
//       this.restRoomPrices = restroom.dataset.prices.split(',');

//       this.maxCountRoom = this.roomPrices.length
//       this.maxCountRestRoom = this.restRoomPrices.length
//     }

//     getRestroomText(count) {
//       let text = ''

//       if (count > 1 && count < this.maxCountRestRoom) {
//         text = $ {
//           count
//         }
//         санузла;
//       } else if (count >= this.maxCountRestRoom) {
//         text = $ {
//           count
//         }
//         санузлов;
//       } else {
//         text = $ {
//           count
//         }
//         санузел;
//       }

//       return text
//     }

//     getRoomText(count) {
//       let text = ''

//       if (count > 1 && count < this.maxCountRoom) {
//         text = $ {
//           count
//         }
//         комнаты
//       } else if (count >= this.maxCountRoom) {
//         text = $ {
//           count
//         }
//         комнат
//       } else {
//         text = $ {
//           count
//         }
//         комната
//       }

//       return text
//     }



//     counterRoomNext() {
//       this.countRoom++
//       room.innerHTML = this.getRoomText(this.countRoom);
//     }


//     counterRoomPrev() {
//       this.countRoom--
//       room.innerHTML = this.getRoomText(this.countRoom)
//     }


//     counterRestroomNext() {
//       this.countRestroom++
//       restroom.innerHTML = this.getRestroomText(this.countRestroom)
//     }


//     counterRestroomPrev() {
//       this.countRestroom--
//       restroom.innerHTML = this.getRestroomText(this.countRestroom)
//     }


//     calcResult() {
//       const value = +this.roomPrices[this.countRoom - 1] + +this.restRoomPrices[this.countRestroom - 1]
//       this.result.innerHTML = "Заказать за " + value.toFixed(1) + " руб";
//     }

//     init() {
//       const self = this

//       this.room.addEventListener("click", function (e) {
//         const target = e.target;
//         if (target.classList.contains('next') && self.countRoom != self.maxCountRoom) {
//           self.counterRoomNext()
//         }
//         if (target.classList.contains('prev') && self.countRoom != 1) {
//           self.counterRoomPrev()
//         }
//         self.calcResult();
//       })

//       this.restroom.addEventListener("click", function (e) {
//         if (e.target.classList.contains('next') && self.countRestroom != self.maxCountRestRoom) {
//           self.counterRestroomNext()
//         }
//         if (e.target.classList.contains('prev') && self.countRestroom != 1) {
//           self.counterRestroomPrev()
//         }
//         self.calcResult();
//       })
//     }
//   }

//   const calc = new Calc(calcRoom, calcRestroom, result);

//   calc.init();
// })(window)