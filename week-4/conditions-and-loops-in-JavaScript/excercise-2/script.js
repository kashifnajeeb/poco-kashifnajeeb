const weekDays = {
  monday: "Montag",
  tuesday: "Dienstag",
  wednesday: "Mittwoch",
  thursday: "Donnerstag",
  friday: "Freitag",
  saturday: "Samstag",
  sonntag: "Sonntag",
};

function translateWeekDays(day) {
  day = day.toLowerCase();
  return weekDays[day];
}

console.log(translateWeekDays("tuesday"));
