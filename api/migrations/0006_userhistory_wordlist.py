# Generated by Django 4.0.3 on 2022-04-24 02:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_userhistory'),
    ]

    operations = [
        migrations.AddField(
            model_name='userhistory',
            name='wordlist',
            field=models.TextField(default='SOME STRING', max_length=140),
        ),
    ]