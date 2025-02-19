//complete this code
class Person {
	public:
	string name,
	let age,
	Person(Name,Age){
		this.name = Name,
	      this.age =Age,
	}
 string get name(){
	  return name;
  }
 set age(age){
	 age = age;
 }
};

class Student extends Person {
	
	void study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	void teach(){
		console.log(`${name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
