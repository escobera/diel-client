import Ember from 'ember';

export default Ember.Component.extend({
  currentStudent() {
    if (this.currentStudentIdx === undefined) {
      students[0];
    } else {
      students[this.currentStudentIdx];
    }
  },
  setCurrentStudentIdx(studentIdx) {
    this.currentStudentIdx = studentIdx;
  },
  actions: {
    nextStudent() {
        students[this.currentStudent++];
      }
  }
});
