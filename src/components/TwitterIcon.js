import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '0rem 2rem'
    }
}));

const TwitterIcon = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img alt="Twitter icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFgElEQVRoge2ZW2xUVRSGv3XOTC8zLbdChQIaJUgt6oNcDC9CEWO8oBLjQMAYjQoSIDExRoyXYLyEBzUa7jGRmIDSiqJRiVGoPpAYkSZgFFuUKFBuAqXA9DYz+ywfikJnzpxLp8qD/I9rr/3vf+291zpn7w2XcRn/b0i/sNSrHaFzsqNaK8IEUa1WGAGUnfdIqnJELGlWpdFWaUg3le5kmTiFDl1YAB90jI5YziKFB4GRIXu3iLIhE7VWcX+spa8S+hZA/blhtsMriDwMFPV18PNIgb5rjL7A3AEnw3YOHYBdn5yLsgIYEravD06hutjMKd8UplPwANZp1B6UXA3yWGhpoaDrTFvZEhZIOoh3sAA+05jd2b4Z5Y6CtAXHVhOLP8BM6fBz9A9gnUbtwe2f/ofi/8Y2I/G7SEjKy8nyY7EHJVdfAvEAM2xNvu3n5LkC9qbkPIQN/aepDxCdYxLldXmb83b8+GyFnbaagKH/hq4QaDXGGZevxObdQnZKXuPSiwcYYtv2S/ka3Vfgo45RdsbZT+EfKQAiAkvGRnl0TIQxcYu2tLLjhGF5U5rGVodSG+6uilBdLry817V6pozYY0mUHszhdh0w4yxWD/HP1UT58pihsdX/V0aAD6YUM2vUhaGGFQuzRkW4qyrCjhOGKUNt9icdZnzblY+mKOKYhRl41o2/N5apZV/XfgAYlY+t+c5SBhUJ07/p4ucz3kE8cnWEdyYVe/psP26oO5ghHhFW/Jr3+3XYSPwqEmIuNubkQKSm82Yv8QCVJUJFkfD1tBKmVtqe4h67JurZDnDrFTbPjy9iS0vGy21klM4J2cacABzVWr8Bf2rrmfXKYuGrqSU8Ux3NW86uH+j7qcFRqG3opKVTPf0MzvRsWw674Ez0G/DNfRdmyhZ49cYitteWcNPgXLFx1yzrDQUOdHiLBxAV/xVQlWv9iLa0ZHjvj97Lfcswm523lbJ9Wgnzx0SoGWAFEg9wKuUvHkDRcdm2nCFEGOFHtG1aCXUHMwwvEW4f3jsHplbavnmRjeM+W+cfbeRqc5ujMhdbLyiwZqJ3ZQmDPT6V7CKUZxv8M8wFS39MYYJNWiB8edT4O+WBWwBJv06NrQ737ujiZHfhUXQY+OpY4ADOZRtckpijQZgajhumNnSxtYDZA1j7W5rWwEmcq80liXUfyHg/svWTi5l9ZcAykwdn08obzYFOjj3akOZsW+4KYO0KQrZgV4r1v2coZBPN35XieFdwBkVztOUEYKs0BCFLZpTHf+hm0tedvN6cZvdph7Z0cDFv7Uuz+ZDnr0MO3LTlBJBuKt0JHApKuvu0w9I9KR76vpvvTgYrh6/sTfP0bs+jrhsOpptijdnG3E28TBzZlNyowtJ8TKU2VBQJ4wZYTBpiMbMqws0V/hX5RLfy1O4U7x8IN/MAAhvdriJDH2imDLV4saaIGcPtwJdK7RlY/Vua5b+kORNim12EbiPWGBKxw9kNeTXYdefWgDyRr72qVLinKsLkCosbBlqMjAkDo4IAZ9LKgXZlT5tDw5+GL44YkpkC0l1lpZkTX+LWlH8S688MsdVu5tKfi08Z41SHPtSTGNiKqmvU/ylUF3pd+npmXs9Fq67rf1VBIavMnPIPvTx8S4eRskWgn/SfqMD4wlTGnvRz8q99CTEmVjYP2NofqgJB+NzE4glqxbfeBvudnikdpi1+H+jagsX5QlaZYfFZQW6moU8PHOdmo7KS/q9OJ1Bd5LfnsxH6QGMS5XUm6lSDrAa6w/Z3QTcqK42Y6rDiodBHvvqOkRHHWazCPGB0yN6HBDZkxFrl9oUNiv55Zl2mVrSmc6LBmS4qExQdJz2vlheeWYUWUdmn6K6eZ9ZYY388s17GZfzf8RfU4PMwfP7VwwAAAABJRU5ErkJggg=="/>
        </div>
    )
}

export default TwitterIcon;