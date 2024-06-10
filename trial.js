function a()
{
    console.log("In a");
    return function b()
    {
        console.log("In b");
    }
}

x = a()
x()