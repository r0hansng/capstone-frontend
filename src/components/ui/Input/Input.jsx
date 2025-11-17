import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

const inputVariants = cva('transition-all duration-300', {
  variants: {
    variant: {
      text:
        'border border-outline rounded-xs h-[44px] py-2 px-3 focus:outline-none focus:ring-1 focus:ring-offset-1',
      checkbox: 'w-fit h-fit accent-outline w-4 h-4 rounded-xs ',
      radio: 'w-fit h-fit  accent-outline w-4 h-4 rounded-xs '
    },
    size: {
      sm: 'p-2',
      md: '',
      lg: 'py-3 px-8',
      xl: 'px-4 py-6'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
const Input = ({
  className,
  variant = 'text',
  size = 'xl',
  children,
  ...props
}) => {
  console.log(props.title.split(' ')[0]);
  if (props.type === 'checkbox') {
    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={props.title.split(' ')[0]}
          className={cn(inputVariants({ variant, size }), className)}
          {...props}
        />
        <label htmlFor={props.title.split(' ')[0]} className='cursor-pointer'>{props.title}</label>
      </div>
    );
  } else if (props.type === 'radio') {
    return (
      <div className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          id={props.title.split(' ')[0]}
          className={cn(inputVariants({ variant, size }), className)}
          {...props}
        />
        <label htmlFor={props.title.split(' ')[0]} className='cursor-pointer'>{props.title}</label>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor={props.title.split(' ')[0]} className="font-bold">
          {props.title}
        </label>
        <input
          className={cn(inputVariants({ variant, size }), className)}
          {...props}
          id={props.title.split(' ')[0]}
        />
      </div>
    );
  }
};

Input.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'checkbox', 'radio']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node
};

export default Input;
