const members = require('./models/members')
var _ = require('lodash')

function memberctrl() {
    this.getmember = function(id, res) {
        members.findOne({memberId:id}).exec(function(err, result) {
            if (err) {
               res.status(500).send(err);
            } else {
               if (result && result.fname) {
                  res.send(result.fname);
               } else {
                  res.status(404).send("Member not found.");
               }
            }
         }); 
    }

    this.getallmembers = function(res) {
        members.find({}).exec(function(err, results) {
           if (err) {
              res.status(500).send(err);
           } else {
              res.send(results);
           }
        });
     };
  
    this.addmember = function(body, res) {
        var newM = {
            memberId : body.memberId,
            fname : body.fname,
            mname : body.mname,
            lname : body.lname
        }
        var newmember = members(newM)
        newmember.save((err,result) => {res.send("success save")});   
    }

    this.updatemember = function(body, res) {
        var updateM = {
          memberId : body.memberId,
          fname : body.fname,
          mname : body.mname,
          lname : body.lname
        };
        
        members.findOneAndUpdate({ memberId: body.memberId }, updateM, { new: true, upsert: true }, function(err) {
          if (err) {
            res.send(err);
          } else {
            res.send("success");
          }
        });
      };

    this.deletemember = function(id, res) {
    members.findOneAndDelete({memberId:id}).exec(function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result && result.fname) {
                res.send("Member Deleted");
            } else {
                res.status(404).send("Member not found.");
            }
        }
        }); 
    }  
}
module.exports = new memberctrl()