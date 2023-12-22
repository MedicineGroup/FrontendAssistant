import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../store/auth-context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classes from "./Form-style.module.css";

const schema = yup.object({
  email: yup.string().email("Fournissez un email correcte"),
  password: yup.string().required(),
});

const LoginForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { errors } = formState;
  const { onLogin, errors: loginErrors, loading } = useAuthContext();
  const onSubmit = async (data) => {
    await onLogin(data);
    reset();
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" font-primary mt-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <Typography variant="h4" className=" text-primary text-center">
        Login
      </Typography>
      {loginErrors && <Alert color="red">{loginErrors.loginErrors}</Alert>}

      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email")}
            error={errors.email && true}
          />
          {errors?.email && (
            <div className={classes["input-error"]}>{errors.email.message}</div>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("password")}
            error={errors.password && true}
          />
          {errors?.password && (
            <div className={classes["input-error"]}>
              {errors.password.message}
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="mt-6 bg-primary"
          fullWidth
          disabled={loading}
          
        >
          {loading ? <Spinner /> : "Login"}
        </Button>
      
      </form>
    </Card>
  );
};

export default LoginForm;