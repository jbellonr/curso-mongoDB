db.system.js.save({_id:"alumno_insert", value:function(idalumno, nombre, apellidos, dni) {
        var e;
        try {
            db.alumno.insertOne({idalumno:idalumno, nombre:nombre, apellidos:apellidos, dni:dni});
        } catch (e) {
            print (e);
        }
}})
db.loadServerScripts('alumno_insert')
alumno_update(1,"nombre1","apellido1","dni1")

db.system.js.save({_id:"alumno_update", value:function(idalumno, nombre, apellidos, dni) {
        var e;
        try {
            db.alumno.updateOne({"idalumno":idalumno},{$set:{"nombre":nombre, "apellidos":apellidos, "dni":dni}});
        } catch (e) {
           print (e);
        }
}})
db.loadServerScripts('alumno_update')
alumno_update(1,"nombre1-x","apellido1-x","dni1-x")

db.system.js.save({_id:"alumno_findByKey", value:function(idalumno) {
        var e;
        try {
            return db.alumno.find({idalumno:idalumno});
        } catch (e) {
            print (e);
        }
}})
db.loadServerScripts('alumno_findByKey')
alumno_findByKey(1)

db.system.js.save({_id:"alumno_delete", value:function(idalumno) {
        var e;
        try {
            db.alumno.deleteOne({"idalumno":idalumno});
        } catch (e) {
            print (e);
        }
}})
db.loadServerScripts('alumno_delete')
alumno_delete(1)


