using System;
using System.ComponentModel.DataAnnotations;

namespace ASP_NET_Core.Models;

public class Employee
{
    public int Id { get; set; }

    [Required]
    [Display(Name = "Full Name")]
    public string Name { get; set; } = string.Empty;

    [Display(Name = "Position")]
    public string Position { get; set; } = string.Empty;

    [Display(Name = "Hire Date")]
    [DataType(DataType.Date)]
    public DateTime HireDate { get; set; }

    [Display(Name = "Office Number")]
    [Range(1, 9999, ErrorMessage = "Office number must be a valid number")]
    public int OfficeNumber { get; set; }

    [Display(Name = "Phone")]
    public string Phone { get; set; } = string.Empty;

    [Display(Name = "Skype")]
    public string Skype { get; set; } = string.Empty;

    [Display(Name = "Email")]
    [EmailAddress(ErrorMessage = "Please enter a valid email address")]
    public string Email { get; set; } = string.Empty;

    [Display(Name = "Notes")]
    public string Notes { get; set; } = string.Empty;
}
