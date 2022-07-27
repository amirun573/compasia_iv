# compasia_iv
For Assesement

## Setup Enviroment
Create file named .env
```
HOST = satao.db.elephantsql.com
PORT = 5432
USERNAME = sonfswua
PASSWORD = 0e5hqErktzVrAcSPQybV1QtYaCfUpJ1l

```

## Acess the Directory

To run this assessment, please make sure to access the assessment folder.

```
cd assessment
```

Once done, just run for installing nodejs and dependencies that contains in this assessment.

```
npm install
```

After complete the installation, you can proceed to run the assessment by typing:

```
npm start
```



## List of API
![Screenshot 2022-07-28 at 1 19 02 AM](https://user-images.githubusercontent.com/23011041/181339400-9662b9df-c7d8-4366-9e02-d0b0804143b0.png)

Data type for Attribute

```
firstname: string
lastname: string
mobile_no: number
```
1. Get list of all contacts.

```
[Get] /user
```
Outcome:
![Screenshot 2022-07-28 at 1 58 26 AM](https://user-images.githubusercontent.com/23011041/181340648-9d6d83d4-ded5-4865-8f05-fcd3cd458e17.png)

2. Filter list based on name or mobile number.

```
[Get] /user/search
```

Body required: (Note: This API give flexibility where if you want to search by name, it just required firstname and lastname and if by mobile number, just send only with mobile_no but it is ok to send all of them).
```
{
    "firstname": "{{firstname}}",
    "lastname": "{{lastname}}",
    "mobile_no":{{mobile_no}}

}
```
Outcome:

![Screenshot 2022-07-28 at 1 29 26 AM](https://user-images.githubusercontent.com/23011041/181340152-18edccdf-93f7-4625-9718-aef9d017655d.png)


3. Create, update, delete contact.

    a. Create

    ```
    [Post] /user
    ```

    Body required: (Note: All attributes are required)
    ```
    {
        "firstname": "{{firstname}}",
        "lastname": "{{lastname}}",
        "mobile_no":{{mobile_no}}

    }
    ```

    Outcome:
    
    
![Screenshot 2022-07-28 at 1 36 27 AM](https://user-images.githubusercontent.com/23011041/181340821-33808c9c-6645-46ab-a174-c7edd61db392.png)


    b. Update

    ```
    [Put] /user/:id
    ```

    Body required: (Note: At least of the attributes mentioned during request)
    ```
    {
        "firstname": "{{firstname}}",
        "lastname": "{{lastname}}",
        "mobile_no":{{mobile_no}}

    }
    ```

    Outcome:
    
    
![Screenshot 2022-07-28 at 2 01 14 AM](https://user-images.githubusercontent.com/23011041/181341088-d96181ca-c41e-4ca5-bb51-5eddd77fdcef.png)


    c. Delete

    ```
    [Delete] /user/:id
    ```

     Outcome:
     
     
![Screenshot 2022-07-28 at 1 44 27 AM](https://user-images.githubusercontent.com/23011041/181341203-b37b7661-e44e-4430-ac63-1dfeaa65ac48.png)


4. Check duplicate contact based on mobile number.

```
[Get] /user/duplicate
```

Body required:
```
{
    "mobile_no":{{mobile_no}}
}
```

Outcome:


![Screenshot 2022-07-28 at 1 47 01 AM](https://user-images.githubusercontent.com/23011041/181341357-fa7d3da8-88ac-4444-b5d4-ba82517e0cc7.png)

## Validation

If parameters does not match the the data type, API will return 

```
{
    "statusCode": 500,
    "message": "Internal server error"
}
```

![Screenshot 2022-07-28 at 2 03 52 AM](https://user-images.githubusercontent.com/23011041/181341577-cc9c07ce-17d5-483e-97d1-1b2578f99917.png)

Some of the API will return parameter that are required if you miss to send.


![Screenshot 2022-07-28 at 2 06 20 AM](https://user-images.githubusercontent.com/23011041/181341949-87a75b59-3845-405b-829e-615cf501015b.png)


## If facing problem with git
Refer: https://stackoverflow.com/questions/56799562/git-submodule-add-error-does-not-have-a-commit-checked-out
