
Sub csv_script()
cont_student = 0
mediaPassed = 0
mediaFailed = 0
Sheets.Add(After:=Sheets("Plan1")).Name = "Plan2"
    For students = 2 To 100
        Worksheets("Plan1").Activate
        user_student = Cells(students, 1).Value
        If (user_student <> Cells(students - 1, 1).Value) Then
            num_testsPassed = Cells(students, 5).Value
            mediaPassed = mediaPassed + num_testsPassed
            num_testsFailed = Cells(students, 6).Value
            mediaFailed = mediaFailed + num_testsFailed
            date_submission = Cells(students, 7).Value
            
            Worksheets("Plan2").Activate
            Cells(1, 1).Value = "Username Aluno"
            Cells(1, 1).Interior.ColorIndex = 34
            Cells(1, 2).Value = "Num Tests Passed"
            Cells(1, 2).Interior.ColorIndex = 34
            Cells(1, 3).Value = "Num Tests Failed"
            Cells(1, 3).Interior.ColorIndex = 34
            Cells(1, 4).Value = "Submission Date"
            Cells(1, 4).Interior.ColorIndex = 34
            Cells(cont_student + 2, 1).Value = user_student
            Cells(cont_student + 2, 2).Value = num_testsPassed
            Cells(cont_student + 2, 3).Value = num_testsFailed
            Cells(cont_student + 2, 4).Value = date_submission
            cont_student = cont_student + 1
                
        End If
    Next students
    Worksheets("Plan2").Activate
    Cells(cont_student + 3, 1).Value = "Media Tests Passed"
    Cells(cont_student + 3, 1).Interior.ColorIndex = 34
    If ((mediaPassed <> 0) And cont_student <> 0) Then
        Cells(cont_student + 3, 2).Value = mediaPassed / (cont_student - 1)
    Else
        Cells(cont_student + 3, 2).Value = 0
    End If
    Cells(cont_student + 4, 1).Value = "Media Tests Failed"
    Cells(cont_student + 4, 1).Interior.ColorIndex = 34
    If ((mediaFailed <> 0) And cont_student <> 0) Then
        Cells(cont_student + 4, 2).Value = mediaFailed / (cont_student - 1)
    Else
        Cells(cont_student + 4, 2).Value = 0
    End If
    Cells(cont_student + 5, 1).Value = "Total Alunos"
    Cells(cont_student + 5, 1).Interior.ColorIndex = 34
    Cells(cont_student + 5, 2).Value = cont_student - 1
    Worksheets("Plan2").Columns("A:E").AutoFit
    Worksheets("Plan2").Range("A1:D1").BorderAround _
    ColorIndex:=1
End Sub

