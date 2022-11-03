package com.example.czas_zycia;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
private int licznik=0;
TextView licznikTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        licznikTextView=findViewById(R.id.licznikTextView);
        Log.i("czaszycia","wywolana metoda onCreate()");
if(savedInstanceState !=null){
    licznik= savedInstanceState.getInt("licznik",0);
    licznikTextView.setText(String.valueOf(licznik));
}
    }



    @Override
    protected void onStart() {
        super.onStart();
        Log.i("czaszycia","wywolana metoda onStart()");
    }
    @Override
    protected void onResume() {
        super.onResume();
        Log.i("czaszycia","wywolana metoda onResume()");
    }
    @Override
    protected void onPause() {
        super.onPause();
        Log.i("czaszycia","wywolana metoda onPause()");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("czaszycia","wywolana metoda onStop()");
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("czaszycia","wywolana metoda onDestroy()");
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        Log.i("czaszycia","wywolana metoda onSaveInstanceState()");
        outState.putInt("licznik",licznik);
    }

    public void zwieksz(View view){
        licznik++;
        licznikTextView.setText(String.valueOf(licznik));


    }
    public void zmniejsz(View view){
        licznik--;
        licznikTextView.setText(String.valueOf(licznik));
    }
}