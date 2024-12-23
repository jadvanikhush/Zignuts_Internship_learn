class university
{
    constructor(name)
    {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department)
    {
        if(!this.departments.includes(department))
        {
            this.departments.push(department);
            console.log(`Department "${department}" added to ${this.name}.`)
        }
        else
        {
            console.log(`Department "${department}" is already exists in ${this.name}`)
        }
    }

    removeDepartment(department) 
    {
        const index = this.departments.indexOf(department);
        if (index !== -1) 
        {
          this.departments.splice(index, 1);
          console.log(`Department "${department}" removed from ${this.name}.`);
        } 
        else 
        {
          console.log(`Department "${department}" does not exist in ${this.name}.`);
        }
      }

      displayDepartments() 
      {
        if (this.departments.length === 0) 
        {
          console.log("No any departments available.");
        } 
        else 
        {
            console.log(`Departments of ${this.name} are`)
            for (let i = 0; i < this.departments.length; i++) {
                console.log(this.departments[i])
            }
        }
      }
    }

 const new_uni = new university("A1 University");
 
 new_uni.displayDepartments();

 new_uni.addDepartment("IT");
 new_uni.addDepartment("EC");
 new_uni.addDepartment("MECH");

 new_uni.displayDepartments();

 new_uni.removeDepartment("EC");
 new_uni.removeDepartment("IT");

 new_uni.displayDepartments();
