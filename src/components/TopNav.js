import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from './Logo';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: '#F9BD3B',
      color: '#45484D',
      padding: '.5rem 5rem' 
  },
  button: {
    // backgroundColor: '#F69B2F',
    // color: '#45484D'
    margin: '.25rem .25rem',
    backgroundColor: '#45484D'
  }
}));

export default function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Logo />
          <Typography variant="h6" className={classes.title}>
            DAWNMAX
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            Home
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Services
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            About Us
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Talk to an expert?
          </Button>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon  />
            </Badge>
          </IconButton> */}
          <Button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD/UlEQVRoge2ZQWhcRRjHf9+8bbTJ9tKaapsm0IsJCLlsUA9mTdMcdE2oCSwVo9BDqZSk4LWIsKL0KmK3VIWeUrCJbJQ1C4LETUC0IQv1ZnszTWy1tkWbFpLdvPGQLYR9b3ffzG720vyOM9833/97896bmW9ghx2ebKQeg8Tjk87fhd0vIs4RtI4AXcABIFw0WQX9J8h1RHICs9nuhQUSCbfW2DUlED32Q7tSG2Ma/Q7QZui+rGFCiSSzqdiyrQarBHrjmVa1wSdofQJosg1eZF3DJVVwP8ymh/4xdTZOIDoy87ZoPgf2mvpWkXJXcMez04NfG3kFNYycWtwVvvPXBeCksTYDBL540PrsmdyXPfmA9tWJDKWbwyH1DfB6TeqConVmdUPHc+mhR9VMVTWDyKnFXQ0VDyASCzvquxfik1W/r6oJFF+bxol/jDCwr9DyWXWzCkSHM6OCnrCJ7zhC7Gg7A70HOdwRZk+4CdkSrW8kE2gcLfLWfCp2pVx/2QSODqf2FXjqd+CZ4LI3UUo4dzbCy5H9ZW2CJgDck4LbWe4XW/YVKsjT57AQDzA40F5RvCF7taM+Ktfpm0DfSOZQcZGyYiB60NbVH+HkK/F0h19XyNdBM04NK+zhjj2eto8/vcb8r7fJ5622P02qoE4DZ0s7vDOQSCiNHrWJ8piWFu9z+ennW7biARB4Nx6fdErbPQm8+lvkJeCQdSRAifff4Lq6liEB2m7nd0c8sTxm4hypNdJ24YjqL23zzrWmx2bwbCoWuP/f/9Y5duJH4xgaHWAGcJ83HtmQP5ZXLT2ls7TFJwE5YDl6YJZWHtq6erT5rQNhn7a6srRiOwN4/s/+64AFW7cGft+DwdbBCL8ZsH48DeBBaYNPAvpWI5RY4tHmk4C60QgldujrpS0+CxmLDdFigcarzZOAwGxj5Jgj4ni0eRLIdi8sADcbosgEzdJc99VcabPfbtTVcLkhokxQXPYrRfoeaJRIEljfdlHBWXMcN+nX4ZtANhVb1nBpezUFR4v+anZqaMWvr+yZOB9yPgCMa5X1R+6qvDY7EwP8MvXaPUGf2R5RJrinKxV9q5YW+4ZnLmp4r76igiGQzE6/MV7JpmplrjX0cAzh2/rJCoaGGe43v1/NLnhx15EpRCofu+rH96sF93hdirsAufTQo9X9z72p4WLt2iojkJT7zcNBxBftzYiOZI6L1uexrNpV4A7osbnpwSkTp0AzsJX5VOxKiLUuNBeANVN/H9a06PPrIafLVDzUeMnXH0+3FQpqXGAUaDd0v4kw4ThustwiFYS6XLOSSKjea5EeR1T/ZulDOtm8tdxyzcoy6BsaFkWc2bnuq7l6XLPusMOTzv8z5ChKjVggmQAAAABJRU5ErkJggg=="/>
          </Button>
          <Button>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFgElEQVRoge2ZW2xUVRSGv3XOTC8zLbdChQIaJUgt6oNcDC9CEWO8oBLjQMAYjQoSIDExRoyXYLyEBzUa7jGRmIDSiqJRiVGoPpAYkSZgFFuUKFBuAqXA9DYz+ywfikJnzpxLp8qD/I9rr/3vf+291zpn7w2XcRn/b0i/sNSrHaFzsqNaK8IEUa1WGAGUnfdIqnJELGlWpdFWaUg3le5kmTiFDl1YAB90jI5YziKFB4GRIXu3iLIhE7VWcX+spa8S+hZA/blhtsMriDwMFPV18PNIgb5rjL7A3AEnw3YOHYBdn5yLsgIYEravD06hutjMKd8UplPwANZp1B6UXA3yWGhpoaDrTFvZEhZIOoh3sAA+05jd2b4Z5Y6CtAXHVhOLP8BM6fBz9A9gnUbtwe2f/ofi/8Y2I/G7SEjKy8nyY7EHJVdfAvEAM2xNvu3n5LkC9qbkPIQN/aepDxCdYxLldXmb83b8+GyFnbaagKH/hq4QaDXGGZevxObdQnZKXuPSiwcYYtv2S/ka3Vfgo45RdsbZT+EfKQAiAkvGRnl0TIQxcYu2tLLjhGF5U5rGVodSG+6uilBdLry817V6pozYY0mUHszhdh0w4yxWD/HP1UT58pihsdX/V0aAD6YUM2vUhaGGFQuzRkW4qyrCjhOGKUNt9icdZnzblY+mKOKYhRl41o2/N5apZV/XfgAYlY+t+c5SBhUJ07/p4ucz3kE8cnWEdyYVe/psP26oO5ghHhFW/Jr3+3XYSPwqEmIuNubkQKSm82Yv8QCVJUJFkfD1tBKmVtqe4h67JurZDnDrFTbPjy9iS0vGy21klM4J2cacABzVWr8Bf2rrmfXKYuGrqSU8Ux3NW86uH+j7qcFRqG3opKVTPf0MzvRsWw674Ez0G/DNfRdmyhZ49cYitteWcNPgXLFx1yzrDQUOdHiLBxAV/xVQlWv9iLa0ZHjvj97Lfcswm523lbJ9Wgnzx0SoGWAFEg9wKuUvHkDRcdm2nCFEGOFHtG1aCXUHMwwvEW4f3jsHplbavnmRjeM+W+cfbeRqc5ujMhdbLyiwZqJ3ZQmDPT6V7CKUZxv8M8wFS39MYYJNWiB8edT4O+WBWwBJv06NrQ737ujiZHfhUXQY+OpY4ADOZRtckpijQZgajhumNnSxtYDZA1j7W5rWwEmcq80liXUfyHg/svWTi5l9ZcAykwdn08obzYFOjj3akOZsW+4KYO0KQrZgV4r1v2coZBPN35XieFdwBkVztOUEYKs0BCFLZpTHf+hm0tedvN6cZvdph7Z0cDFv7Uuz+ZDnr0MO3LTlBJBuKt0JHApKuvu0w9I9KR76vpvvTgYrh6/sTfP0bs+jrhsOpptijdnG3E28TBzZlNyowtJ8TKU2VBQJ4wZYTBpiMbMqws0V/hX5RLfy1O4U7x8IN/MAAhvdriJDH2imDLV4saaIGcPtwJdK7RlY/Vua5b+kORNim12EbiPWGBKxw9kNeTXYdefWgDyRr72qVLinKsLkCosbBlqMjAkDo4IAZ9LKgXZlT5tDw5+GL44YkpkC0l1lpZkTX+LWlH8S688MsdVu5tKfi08Z41SHPtSTGNiKqmvU/ylUF3pd+npmXs9Fq67rf1VBIavMnPIPvTx8S4eRskWgn/SfqMD4wlTGnvRz8q99CTEmVjYP2NofqgJB+NzE4glqxbfeBvudnikdpi1+H+jagsX5QlaZYfFZQW6moU8PHOdmo7KS/q9OJ1Bd5LfnsxH6QGMS5XUm6lSDrAa6w/Z3QTcqK42Y6rDiodBHvvqOkRHHWazCPGB0yN6HBDZkxFrl9oUNiv55Zl2mVrSmc6LBmS4qExQdJz2vlheeWYUWUdmn6K6eZ9ZYY388s17GZfzf8RfU4PMwfP7VwwAAAABJRU5ErkJggg=="/>
          </Button>
          <Button>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEd0lEQVRoge2ZTWwVVRTHf+e+D0H6Kh+SUAqWQAKNmNKkjbIwMSAs0A0sqB+wcEE0hGKM0dQmfjwSAhQTE1JKbExYKCTyYcREWYBhIwskxUCRSBsNQVpoRKAItH3vdea4oNL2zbw3M+8NLyb0t5o5994z/zN35p77ARNM8GgjoXg5eDDC79XPGqPLFOoEqQatAMpGatwFrip0CZyxhRMM1pwmKXaxjy4ugK3n55qYtQmV9UBlwNY9IPts0TaalvQUKqGwALb9MtNEzFZU3gDihT58hDTCXjuS+Yj36v8O2jhwAJEdna8r2gpMD9rWgxsCjdYHS74O0sh/AO0dMdMf24OyIbC0QEi7PS29mbfqM75q+/KZ7HhcJsUOC6wqSptPVDiqg5m1JOsHvOp6B9DeEZNbse9KJf4/FH7UoejLJBen89UzXo5Mf2xPqcUDCKwwk4d3+aiXm0hL5zpV3ReerOCI6qtWc+2BnOU5W277bYYx6YvAk27FaxY+QevK2YgIjcd6+bb7dvFq3blpRzOLcg2xOT8hE0ltI4d4gNaVs6koizFrSpRdK2aHoDMn000mtiVXoXsALefmjCSpnOiYawlnQpIbYQM7LjzlVuQagEEb8ciwbx+/St+9YXrvZGg81huCyrzEDdZGtwLnu0uqMZM6LwNzHraqgPTa87uqaGiwxhqdPRA//xz/P/EAlVxaWJdtjGYbjNFlfrxZTTXj7iMtnXnLqsrjvL90Ji8tSFAxJcZfA8Mc/eMfdp66zqXbeXPVqDZluQ2n8wagSL2M+0WL58V5ZRxeXUX5Y5EHtjmJGG/WzuC1p6ex9shljl+64+lHEUcPOD4hQRcWKzibb9bMGyd+LIm44dDqKqrKvWflAouybW6jUEVghR4k4vlnLIm4oWnpTD+uHNocnxCjy8DQSFvKxz/1sf9CPwDrn5nKludnEY+MDoKrFpQDnsNxItvgFkDofHKyj09/vv7gfuep+9fbXxh9oZWJwqS49e3dgjzl4atf+x22L8/fGncf8ZfOHX+6WwDXfOryzbW7zsVV373hglxlGxwBKNJdiOdSoNCVbXMbRjtKIyc4ouLQ5gjAFk6URk5wbCyHNuc/MFhzGuFKSRQF409StWeyjc4AkmKjsr8kkoKg7HfbinRNkbZoG+BvhlUaUralbW4F7jm+aUkPwt6HKikIql/wYa1rms6dPT67MN2kh7vIsy4uETfsaKY68KKedxffFNj80GT5RFQ25tv0zTtNvL/RKu3hy/KLtlnNNYfy1fDcmbPnX9yk6JHwRPlDkR/soVvveNXzDICGBkuHhtepcDQUZT5Q5XsdSjeQXOY5YfIOACBZP6BTM6sRPi9anSfapqmba/zsTEMhBxzbz76iIrsJf3S6LiqbvL75bPz1wBis5toDth2vRtkDpIK2dyGF6m47Hq0OKh6KPuQ7W2miphHRdShzAz75Cjb7bEvbciUpf27CIKmGyefqjbJckbqR3YNKxh6zKj0qdItKh411glTtmTCOWSeY4FHnX5epXWCEH2yoAAAAAElFTkSuQmCC"/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
