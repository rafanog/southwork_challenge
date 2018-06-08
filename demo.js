module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body.num && req.body.numd) {
        if(Number.isInteger(req.body.num) && Number.isInteger(req.body.numd)){
            var result = req.body.num + req.body.numd
            context.res = {
                //default status: 200
                body: "The result of the summatory of both parameters is: " + result
            }
        }else{
            context.res = {
                status: 400,
                body: "One or both parameters are not valid integers."
            }
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please send 2 integer parameters on the request body"
        };
    }
    context.done();
};