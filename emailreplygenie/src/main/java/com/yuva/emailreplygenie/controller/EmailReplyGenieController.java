package com.yuva.emailreplygenie.controller;
import com.yuva.emailreplygenie.model.EmailRequest;
import com.yuva.emailreplygenie.service.EmailReplyGenieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "http://localhost:5173")
public class EmailReplyGenieController {  private final EmailReplyGenieService emailService;

    public EmailReplyGenieController(EmailReplyGenieService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}