System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Event;
    return {
        setters:[],
        execute: function() {
            Event = (function () {
                function Event(name, code, description, date, time, duration, fee, rating, imageUrl, location, capacity) {
                    this.name = name;
                    this.code = code;
                    this.description = description;
                    this.date = date;
                    this.time = time;
                    this.duration = duration;
                    this.fee = fee;
                    this.rating = rating;
                    this.imageUrl = imageUrl;
                    this.location = location;
                    this.capacity = capacity;
                }
                ;
                Event.prototype.calculateDiscount = function (percent) {
                    return this.price - (this.price * percent / 100);
                };
                return Event;
            }());
            exports_1("Event", Event);
        }
    }
});

//# sourceMappingURL=event.js.map
