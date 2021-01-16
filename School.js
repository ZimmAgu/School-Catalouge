///////////////////////////////
//  School Catalouge Project //
///////////////////////////////









class School {






    constructor (name, level, numberOfStudents) {

        this._name = name;

        this._level = level;

        this._numberOfStudents = numberOfStudents;

    }









    // Getter for the _name property
    get get_name () {
        return this._name;
    }






    

    // Getter for the _level property
    get get_level () {
        return this._level;
    }







    // Getter & Setter for the _numberOfStudents property
    get get_numberOfStudents () {
        return this._numberOfStudents;
    }


    set set_numberOfStudents (amount_of_Students) {

            this._numberOfStudents = amount_of_Students;

    }








    // Prints a statement desribing the school name, number of students, and school level 
    quick_Facts () {

        console.log(`${this.get_name} educates ${this.get_numberOfStudents} students at the ${this.get_level} school level`);

    }





    static pick_Substitute_Teacher (substitute_Teacher) {

        let random_Number = Math.floor( Math.random() * substitute_Teacher.length );

        return substitute_Teacher[random_Number];
    
    }








} // End of School class



























class Primary extends School {

    constructor (name, numberOfStudents, pickupPolicy) {
        super(name, `Primary`, numberOfStudents);

        this._pickPolicy = pickupPolicy;
    }



    // Getter for the pickupPolicu property
    get get_pickupPolicy () {
        return this.pickupPolicy;
    }


} // End of Primary School class








class Middle extends School {

    constructor () {}

} // End of Middle School Class









class High extends School {

    constructor (name, numberOfStudents, sportsTeams) {

        super(name, `High`, numberOfStudents);

        this._sportsTeams = sportsTeams;

    }

    // Getter for the sports teams array
    get get_sportsTeams () {
        console.log(this._sportsTeams);
    }


} // End of High School Class







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                          End of class Declarations                                                              //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









let lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')



lorraineHansbury.quick_Facts();



console.log(``);

let sub = School.pick_Substitute_Teacher(   ['Jamal Crawford', 'Lou Williams', 'J. R. Smith',
                                            'James Harden', 'Jason Terry', 'Manu Ginobli']  );


console.log(`The substitute teacher for the day is ${sub}`);




 console.log();










let alSmith = new High(`Al E. Smith`, 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])


alSmith.get_sportsTeams;

