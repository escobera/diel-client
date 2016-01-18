import Ember from 'ember';

export default Ember.Component.extend({
  currentStudent: Ember.computed('students', 'currentStudentIdx', function() {
    var students = this.get('students');
    var idx = this.get('currentStudentIdx');

    return { student: students[idx], index: idx }
  }),
  currentStudentIdx: 0,
  actions: {
    nextStudent() {
      this.incrementProperty('currentStudentIdx');
    }
  }
});
