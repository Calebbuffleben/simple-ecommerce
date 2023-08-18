"use client"
import React from "react";
import { FormEventHandler } from "react";
import { 
    ReviewForm, 
    ReviewInput, 
    RatingContainer, 
    StarIcon, 
    SubmitButton 
} from "./styles";

interface IRatingProps {
    rating: number;
    updateRating: (rating: number) => void;
    submitReview: FormEventHandler;
}

const RatingComponent = ({ updateRating, rating, submitReview }: IRatingProps) => (
    <>
        <RatingContainer>
            <StarIcon className={rating === 1 ? 'selected' : ''} onClick={() => updateRating(1)} >&#9733;</StarIcon>
            <StarIcon className={rating === 2 ? 'selected' : ''} onClick={() => updateRating(2)}>&#9733;</StarIcon>
            <StarIcon className={rating === 3 ? 'selected' : ''} onClick={() => updateRating(3)}>&#9733;</StarIcon>
            <StarIcon className={rating === 4 ? 'selected' : ''} onClick={() => updateRating(4)}>&#9733;</StarIcon>
            <StarIcon className={rating === 5 ? 'selected' : ''} onClick={() => updateRating(5)}>&#9733;</StarIcon>
        </RatingContainer>
        <ReviewForm onSubmit={submitReview} >
            <h3>Deixe seu review</h3>
            <ReviewInput />
            <SubmitButton type="submit" >Deixe a sua avaliação</SubmitButton>
        </ReviewForm>
    </>
);

export default RatingComponent;