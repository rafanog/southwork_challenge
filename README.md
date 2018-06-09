# Southwork Challenge
This repo contains the solution to the Southwork challenge sent to Rafael Noguera, all the considerations for the challenge can be found in [this google doc](https://docs.google.com/document/d/1mlgtiblLDfTunH2xvsDHSd6UHQKO0Dj41wsSYFqdToE/edit?usp=sharing)

## What does the example code does?

The example contains a pretty simple summatory function addapted to be used as a HTTP triggered Azure function. 

## How does it work without docker?

You can start a free trial by going to:

https://tryfunctions.com/try

Select the "Webhook + API" scenario and "Javascript" as a language, then "Create this function" and only login in using either Facebook, Github or a Google account. After the login you'll be prompted with a console where there's a sample template for the scenario you just selected. you can replace the code there with the code inside the Demo.js file in this repo, finally, you can click on the left arrow located at the right of the screen(above the "view files" label) to display a list of the files to make the function work, click on the "Test" tab and change the "Request body" to the following:

```
{
  num: 1,
  numd: 3
}
```
The output shown should be "The result of the summatory of both parameters is: 4".

You can also click on the "Get function Url" to obtain and address in which you can make a "POST" HTTP request to also test the app(remember to send a proper formatted body).

## In case you want to implement this function inside a docker container

You'll need to have installed the following requirements in your local machine:

-[Node.js 8.5 or higher](https://nodejs.org/en/download/)
-[Docker toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/)
-[Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

After creating the function you need to add container support, you can build the image using the dockerfile and the command:

```
docker build -t <name_of_the_image>
docker build -p 8080:80 <name_of_the_image>
```
The container should be executed without problem

## Author

[Rafael Noguera](https://github.com/rafanog)

## Further documentation
- [Azure Functions](https://www.tryfunctions.com/)
- [Docker documentation](https://docs.docker.com/)
- [Serverless architecture](https://martinfowler.com/articles/serverless.html)
- [Functions as a service](https://en.wikipedia.org/wiki/Function_as_a_service)
- [Create your first Azure function](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function)
