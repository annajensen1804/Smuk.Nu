import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import styles from './contactForm.module.css'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const ContactForm = () => {

    const schema = yup.object().shape({
      name: yup.string().required("Navn er påkrævet"),
      email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
      message: yup
            .string()
            .required("Besked er påkrævet")
            .min(10, "Besked skal være på mindst 10 tegn"),
    });

    const navigate = useNavigate()

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
        const response = await fetch("https://smuknu-vomg9.ondigitalocean.app/members", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        console.log(response)

if (!response.ok) {
    throw new Error('Serverfejl')
} else {
    toast.success(
    <div>
        <h1>TAK!</h1>
        <p>{data.name}!</p>
        <p>Vi er enormt glade for at få dig som medlem.</p>
        <img src='' alt='gift'></img>
        <p>Kig I din inbox vi har sendt en lille velkomst gave.</p>
      
      <Button 
        buttonText="Til Forsiden" 
        onClick={() => navigate(-1)}/>
    </div>,
    
    {
      position: 'buttom-center',
      autoClose: 5000,
      icon: false,
      theme: 'light',
      style: {
        backgroundColor: "rgba(247, 240, 242, 1)", 
        textAlign: "center",
        padding: "30px"}
    }
  );
  
  reset();
}
        
        } catch (error) {
            console.log("Fejl:", error);
        }
    }

    return (
      
      <section className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <form>
          <label>Fulde navn</label>
          <input type="text" {...register("name")} />
            {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
            )}

            <label>E-mail</label>
                <input type="email" {...register("email")} />
                {errors.email && (
                    <span className={styles.error}>{errors.email.message}</span>
                )}

            <label>Ris og/eller ros</label>
                <textarea
                    name="message"
                    className="message"
                    cols="30"
                    rows="10"
                    {...register("message")}
                />
                    {errors.message && (
                      <span className={styles.error}>{errors.message.message}</span>
                    )}
            <Button buttonText="Opret" />
        </form>
      </section>
    );
}

export default ContactForm