package com.yuva.emailreplygenie.model;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class EmailRequest {
    private String emailContent;
    private String tone;
}