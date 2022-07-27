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
![Alt text](./note/Screenshot 2022-07-28 at 1.19.02 AM.png?raw=true "List_API")


Data type for Attribute

firstname: string
lastname: string
mobile_no: number

1. Get list of all contacts.

```
[Get] /user
```
Outcome:
![Alt text](./note/Screenshot 2022-07-28 at 1.24.44 AM.png?raw=true "outcome_first")

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
![Alt text](./note/Screenshot 2022-07-28 at 1.29.26 AM.png?raw=true "outcome_second")

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
    ![Alt text](./note/Screenshot 2022-07-28 at 1.36.27 AM.png?raw=true "outcome_second")

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
    ![Alt text](./note/Screenshot 2022-07-28 at 1.39.14 AM.png?raw=true "outcome_third")

    c. Delete

    ```
    [Delete] /user/:id
    ```

     Outcome:
    ![Alt text](./note/Screenshot 2022-07-28 at 1.44.27 AM.png?raw=true "outcome_forth")


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
    ![Alt text](./note/Screenshot 2022-07-28 at 1.47.01 AM.png?raw=true "outcome_fifth")
## If problem with git
Refer: https://stackoverflow.com/questions/56799562/git-submodule-add-error-does-not-have-a-commit-checked-out
