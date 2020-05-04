import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '0rem 2rem'
    }
}));

const LinkedInIcon = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img alt="LinkedIn icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEd0lEQVRoge2ZTWwVVRTHf+e+D0H6Kh+SUAqWQAKNmNKkjbIwMSAs0A0sqB+wcEE0hGKM0dQmfjwSAhQTE1JKbExYKCTyYcREWYBhIwskxUCRSBsNQVpoRKAItH3vdea4oNL2zbw3M+8NLyb0t5o5994z/zN35p77ARNM8GgjoXg5eDDC79XPGqPLFOoEqQatAMpGatwFrip0CZyxhRMM1pwmKXaxjy4ugK3n55qYtQmV9UBlwNY9IPts0TaalvQUKqGwALb9MtNEzFZU3gDihT58hDTCXjuS+Yj36v8O2jhwAJEdna8r2gpMD9rWgxsCjdYHS74O0sh/AO0dMdMf24OyIbC0QEi7PS29mbfqM75q+/KZ7HhcJsUOC6wqSptPVDiqg5m1JOsHvOp6B9DeEZNbse9KJf4/FH7UoejLJBen89UzXo5Mf2xPqcUDCKwwk4d3+aiXm0hL5zpV3ReerOCI6qtWc+2BnOU5W277bYYx6YvAk27FaxY+QevK2YgIjcd6+bb7dvFq3blpRzOLcg2xOT8hE0ltI4d4gNaVs6koizFrSpRdK2aHoDMn000mtiVXoXsALefmjCSpnOiYawlnQpIbYQM7LjzlVuQagEEb8ciwbx+/St+9YXrvZGg81huCyrzEDdZGtwLnu0uqMZM6LwNzHraqgPTa87uqaGiwxhqdPRA//xz/P/EAlVxaWJdtjGYbjNFlfrxZTTXj7iMtnXnLqsrjvL90Ji8tSFAxJcZfA8Mc/eMfdp66zqXbeXPVqDZluQ2n8wagSL2M+0WL58V5ZRxeXUX5Y5EHtjmJGG/WzuC1p6ex9shljl+64+lHEUcPOD4hQRcWKzibb9bMGyd+LIm44dDqKqrKvWflAouybW6jUEVghR4k4vlnLIm4oWnpTD+uHNocnxCjy8DQSFvKxz/1sf9CPwDrn5nKludnEY+MDoKrFpQDnsNxItvgFkDofHKyj09/vv7gfuep+9fbXxh9oZWJwqS49e3dgjzl4atf+x22L8/fGncf8ZfOHX+6WwDXfOryzbW7zsVV373hglxlGxwBKNJdiOdSoNCVbXMbRjtKIyc4ouLQ5gjAFk6URk5wbCyHNuc/MFhzGuFKSRQF409StWeyjc4AkmKjsr8kkoKg7HfbinRNkbZoG+BvhlUaUralbW4F7jm+aUkPwt6HKikIql/wYa1rms6dPT67MN2kh7vIsy4uETfsaKY68KKedxffFNj80GT5RFQ25tv0zTtNvL/RKu3hy/KLtlnNNYfy1fDcmbPnX9yk6JHwRPlDkR/soVvveNXzDICGBkuHhtepcDQUZT5Q5XsdSjeQXOY5YfIOACBZP6BTM6sRPi9anSfapqmba/zsTEMhBxzbz76iIrsJf3S6LiqbvL75bPz1wBis5toDth2vRtkDpIK2dyGF6m47Hq0OKh6KPuQ7W2miphHRdShzAz75Cjb7bEvbciUpf27CIKmGyefqjbJckbqR3YNKxh6zKj0qdItKh411glTtmTCOWSeY4FHnX5epXWCEH2yoAAAAAElFTkSuQmCC"/>
        </div>
    )
}

export default LinkedInIcon;